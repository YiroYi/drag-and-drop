import * as ProjectInput  from './components/project-input';
import * as ProjectList  from './components/project-list';

new ProjectInput.ProjectInput();
new ProjectList.ProjectList('active');
new ProjectList.ProjectList('finished');

