class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement
  peopleInputElement: HTMLInputElement


  constructor() {
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
    //the '!' is to tell TS that this variable wont be null
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';

    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler.bind(this));
  }
  //bind(this), it is to tell TS that inside submit handler the 'this'
  //refers to the configure element inside of the ProjectINput class
  //refers to projectInputClass

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }

}

const prjInput = new ProjectInput();
