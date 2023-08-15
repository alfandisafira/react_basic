import React from "react";
import Button from "../Elements/Button";

class Counter extends React.Component {
  constructor(props) {
    // first
    super(props);
    this.state = {
      count: 1,
    };
    console.log("constructor");
  }

  componentDidMount() {
    // third
    this.setState({ count: 10 });
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    // exec base on condition
    console.log("componentDidUpdate");
    if (this.state.count === 10) {
      this.setState({ count: 1 });
    }
  }

  render() {
    const addOne = () => {
      this.setState({ count: this.state.count + 1 });
    };

    return (
      <>
        <div className="flex gap-6 justify-center items-center mt-2">
          <h5 className="text-white font-medium">{this.state.count}</h5>
          <Button
            bgColor="bg-slate-900 hover:bg-slate-300"
            textColor="text-slate-300"
            onClick={() => addOne()}>
            +
          </Button>
          {/* second and render again after component did mount */}
          {console.log("render")}
        </div>
      </>
    );
  }
}

export default Counter;
