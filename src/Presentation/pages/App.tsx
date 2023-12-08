import { Button } from "@/Presentation/common/styled-components";
import { Loader } from "@/Presentation/common/shared"

const App = () => {
  return (
    <div className="flex flex-col space-y-2 items-center justify-center h-screen w-screen">
      <div>
        <Button $type="primary" value="Primary">Primary</Button>
      </div>
      <div>
        <Button $type="secondary">Secondary</Button>
      </div>
      <div>
        <Button $type="danger">Danger</Button>
      </div>
      <div>
        <Button $type="outlined">Outlined</Button>
      </div>
      <div>
        <Button $type="primary"><Loader /></Button>
      </div>
      <div>
        <Button $type="secondary"><Loader /></Button>
      </div>
    </div>
  );
};

export default App;
