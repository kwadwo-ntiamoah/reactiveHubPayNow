import {
  Button,
  Container,
  Typography,
} from "@/Presentation/common/styled-components";
import useCanvas from "./hooks";

const Canvas = () => {
  const {
    count,
    incrementor,
    incrementCounter,
    incrementCounterAsync,
    incrementCounterByVal,
    decrementCounter,
    decrementCounterAsync
  } = useCanvas();

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col space-y-10 items-center justify-center">
        <Typography $size="title">{count}</Typography>
        <Container className="flex space-x-5">
          <Button $type="primary" onClick={incrementCounter}>
            Increment
          </Button>
          <Button onClick={incrementCounterByVal}>
            Increment By {incrementor}
          </Button>
          <Button $type="secondary" onClick={decrementCounter}>
            Decrement
          </Button>
          <Button $type="primary" onClick={incrementCounterAsync}>
            Increment Async
          </Button>
          <Button $type="primary" onClick={decrementCounterAsync}>
            DecrementAsync
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Canvas;
