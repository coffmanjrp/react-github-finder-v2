import { FC } from 'react';

const App: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <h1 className="text-3xl">Hello world</h1>
      <div className="btn btn-primary mt-5">Click</div>
    </div>
  );
};

export default App;
