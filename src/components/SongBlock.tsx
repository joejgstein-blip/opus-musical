import type { SongSection } from "@/data/show";
import LyricsPanel from "./LyricsPanel";
import ReactionBar from "./ReactionBar";

interface Props {
  song: SongSection;
}

function buildEmbedUrl(url: string) {
  const encoded = encodeURIComponent(url);
  return `https://w.soundcloud.com/player/?url=${encoded}&color=%23c8a96e&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`;
}

export default function SongBlock({ song }: Props) {
  return (
    <div id={song.id} className="section-wrapper">
      <div className="song-block">
        <div className="song-header">
          <span className="song-eyebrow">♪ Song</span>
          <h3 className="song-title">{song.title}</h3>
          {song.lyricsWip && (
            <span className="song-wip-badge">Coming Soon</span>
          )}
        </div>

        {song.soundcloudUrl ? (
          <div className="soundcloud-embed">
            <iframe
              width="100%"
              height="120"
              allow="autoplay"
              src={buildEmbedUrl(song.soundcloudUrl)}
              title={`${song.title} — audio player`}
            />
          </div>
        ) : (
          <div className="soundcloud-placeholder">
            Recording coming soon
          </div>
        )}

        {song.lyrics && <LyricsPanel lyrics={song.lyrics} />}
      </div>

      <ReactionBar sectionId={song.id} />
    </div>
  );
}
