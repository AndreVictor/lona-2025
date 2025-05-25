import Grafismo from './Grafismo';

type HeaderSessaoProps = {
  nome: string;
  font: string;
  comArrows?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
};

export default function HeaderSessao({
  nome,
  font,
  comArrows = false,
  onPrev,
  onNext,
}: HeaderSessaoProps) {
  return (
    <div className={`headerSessao ${font}`}>
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
      <p className={`${font} uppercase condensed`}>{nome}</p>
    </div>
  );
}