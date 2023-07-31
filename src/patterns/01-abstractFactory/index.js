export class SuccessButton {}
export class ErrorButton {}
export class SuccessNotification {}
export class ErrorNotification {}

export class SuccessControl {
  create (type = 'button') {
    return type === 'button' ? new SuccessButton() : new SuccessNotification()
  }
}

export class ErrorControl {
  create (type = 'button') {
    return type === 'button' ? new ErrorButton() : new ErrorNotification()
  }
}

export default class ControlsFactory {
  getFactory (factoryType = 'success') {
    return factoryType === 'success' ? new SuccessControl() : new ErrorControl()
  }
}
