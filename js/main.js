class Header extends HTMLElement {
  constructor(){
    super();
  }
connectedCallback () {
    this.innerHTML = `
    <header>
    <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet">
    BEACHCOMBING TURTLE CLIFFS
    <nav>
    <div class="topnav">
    <a class="navlinks" href="#home">Home</a>
    <a href="#beachcombing">Beachcombing</a>   
    <a href="#marinelife">Marine Life</a>    
    <a href="#contact">Contact</a>
    </div>
    </nav> 
    </header>
    `;
}
}
    customElements.define('header-component', Header);

  //Error message for header & footer Uncaught ReferenceError:  CustomElements is not defined - fixed! This was a simple typo - had a capital at the start of customElements. 

  //new error just on header: 
  //the name "my-header" has already been used with this registry.
  //fix attempt - changed name to the-header. Same error occurs for new name.
  //fix attempt 2 - found missing semicolon and tried a new variation of code and new name, same error.

class MyFooter extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <footer>
        <p>© SHANNSPANPLAYSJS 2022</p>
        <p>non commercial - only for research and educational purpose
        all picture copyrights remain with their authors.</p>
      </footer>`
    }
    }    
    customElements.define('my-footer', MyFooter);

  
    


//Global Variables

const listItems = 12;

console.log(listItems);

let favouriteShell = "Clam Shells";

const locationName = "Turtle Cliffs";

let washedUp = 'Kids love finding ' + favouriteShell;

console.log(washedUp)

let seaStorySentence = washedUp + ' at ' + locationName + '!';

console.log(seaStorySentence);

console.log(`${seaStorySentence.length}`);

let seaStorySentenceCap = seaStorySentence.toUpperCase();

console.log(seaStorySentenceCap);

let greeting = "Ahoy!";
console.log(greeting);

//Local Variable (Type = Boolean)

function flotsam(){
let Shell = true;
console.log(Shell);
}
flotsam();

//to declare variables in js use let & const ( - var is no longer used)

let shellList = document.getElementById ('shell-types');

console.log(shellList)

//Ok so I got the list but next step - how can I isolate individual <li> items? 


