class Input {
  element = {};

  create (type = '') {
    switch (type) {
      case 'text':
        this.element = new TextInput();
        break;
      case 'number':
        this.element = new NumberInput();
        break;
      case 'email':
        this.element = new EmailInput();
        break;
    }

    return this.element;
  }
}

export class TextInput extends Input {
  constructor() {
    super();
    this.element.type = 'text';
  }
}

export class NumberInput extends Input {
  constructor() {
    super();
    this.element.type = 'number';
  }
}

export class EmailInput extends Input {
  constructor() {
    super();
    this.element.type = 'email';
  }
}

export const inputFactory = (type = '') => {
  return new Input().create(type);
};
