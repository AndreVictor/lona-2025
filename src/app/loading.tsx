import Grafismo from "@/components/ui/Grafismo"

// app/loading.tsx
export default function Loading() {
  return (
    <div className="loading fade-in">
        <Grafismo inverted/>
        <h2 className="archivo condensed uppercase">
            Carregando, 
            <br/>aguarde.
        </h2>
    </div>
  );
}