class Greeting {
  private message: string;

  constructor(message: string) {
    this.message = message;
  }

  greet() {
    console.log(this.message);
  }
}

const greeting = new Greeting("Hello, World!");
greeting.greet();
