import Grafismo from './Grafismo';

type HeaderSessaoProps = {
  nome: string;
  comArrows?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
};

export default function HeaderSessao({
  nome,
  comArrows = false,
  onPrev,
  onNext,
}: HeaderSessaoProps) {
  return (
    <div className="headerSessao">
      <Grafismo inverted />
      {comArrows && (
          <div className="headerSessao__arrows">
          <button onClick={onPrev} aria-label="Anterior" className='biz'>
            ←
          </button>
          <button onClick={onNext} aria-label="Próximo" className='biz'>
            →
          </button>
        </div>
      )}
      <p className='archivo uppercase condensed'>{nome}</p>
    </div>
  );
}