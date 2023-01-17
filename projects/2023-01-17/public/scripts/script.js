// Get a reference to the object representing the BODY element so we can append stuff to it.
const body = document.querySelector('body');

// Create a new H1 element.
const q1 = document.createElement('h1');

// Create a text node and add it to the H1
q1.append(document.createTextNode('Can you tell me why HTML was developed?'));

// Add the new H1 element to the body.
body.append(q1);

// Create a new P element.
const a1 = document.createElement('p');

// Create a text node and add it to the P element. Note the use of `` rather
// than '' which allows us to break the string across lines.
a1.append(
  document.createTextNode(`
 HTML (Hypertext Markup Language) was developed to create a standard way to
 create and structure documents on the World Wide Web. It allows developers to
 create structured documents, including headings, paragraphs, images and links,
 that can be displayed in a web browser. It was created to simplify the process
 of creating and sharing documents online, so that anyone can create and view
 web pages with a consistent look and feel.
`),
);

// Add the new P element to the body.
body.append(a1);

const q2 = document.createElement('h1');

q2.append(document.createTextNode('What about using HTML for GUIs?'));

body.append(q2);

const a2 = document.createElement('p');

a2.append(
  document.createTextNode(`
  HTML can be used to create user interfaces for web applications, but it is primarily designed
      as a markup language for creating structured documents to be displayed in web browsers. While
      it can be used to create basic user interfaces, it is not typically considered a good choice
      for creating complex, interactive user interfaces. Other technologies such as JavaScript and
      CSS are typically used in conjunction with HTML to create more advanced user interfaces for
      web applications. Additionally, there are other technologies such as Electron, React Native
      and NativeScript that allow to create cross-platform desktop and mobile apps using web
      technologies such as HTML, CSS, and JavaScript.
  `)
);

body.append(a2);

const q3 = document.createElement('h1');

q3.append(document.createTextNode('What are some of the main elements of HTML?'));

body.append(q3);

const a3 = document.createElement('p');

a3.append(
  document.createTextNode(`
  i got no clue how to make a list
  `)
);

body.append(a3);

const q4 = document.createElement('h1');

q4.append(document.createTextNode('Can you find a picture of the inventor of the web?'));

body.append(q4);

const a4 = document.createElement('p');

a4.append(
  document.createTextNode(`
  (just imagine that a picture was here)
  
  I'm sorry, I am a text based model and I am not able to find or show images. However, I can
      tell you that the inventor of the World Wide Web (WWW) is Sir Tim Berners-Lee. He is a British
      computer scientist and is considered to be the inventor of the World Wide Web. He proposed and
      developed the first successful communication between a Hypertext Transfer Protocol (HTTP)
      client and server via the Internet in 1989. He also created the first web browser, called
      WorldWideWeb, and the first web server, called httpd. He also wrote the first version of the
      HTML language, which provided the structure for web pages. He is currently working on a
      decentralized web project called Solid.
  `)
);

body.append(a4);