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

const a3first = document.createElement('p')
a3first.append(
  document.createTextNode(`
  Some of the main elements of HTML include:
  `)
)
const a3 = document.createElement('ol');
const li1 = document.createElement('li');
const code1 = document.createElement('code');
a3.append(a3first)
code1.append(`<html>`)
li1.append(code1)
li1.append(
  document.createTextNode(`: This is the root element of an HTML document, and it contains all of the other elements.
  `)
);
const li2 = document.createElement('li');
const code2 = document.createElement('code');
code2.append(`<head>`)
li2.append(code2)
li2.append(
  document.createTextNode(`: This element contains information about the document, such as the title of the page, which is displayed in the browser's title bar or tab.
  `)
);
const li3 = document.createElement('li');
const code3 = document.createElement('code');
code3.append(`<body>`)
li3.append(code3)
li3.append(
  document.createTextNode(`: This element contains the content of the document that is displayed in the browser window.
  `)
);
const li4 = document.createElement('li');
const code4 = document.createElement('code');
code4.append(`<h1> to <h6>`)
li4.append(code4)
li4.append(
  document.createTextNode(`: These elements are used for headings and subheadings. <h1> is the highest level heading, while <h6> is the lowest.
  `)
);
const li5 = document.createElement('li');
const code5 = document.createElement('code');
code5.append(`<p>`)
li5.append(code5)
li5.append(
  document.createTextNode(`: This element is used for paragraphs of text.
  `)
);
const li6 = document.createElement('li');
const code6 = document.createElement('code');
code6.append(`<a>`)
li6.append(code6)
li6.append(
  document.createTextNode(`: This element is used for hyperlinks, which allow users to navigate between pages on the web.
  `)
);
const li7 = document.createElement('li');
const code7 = document.createElement('code');
code7.append(`<img>`)
li7.append(code7)
li7.append(
  document.createTextNode(`: This element is used to embed images in a web page.
  `)
);
const li8 = document.createElement('li');
const code8 = document.createElement('code');
code8.append(`<ul> and <ol>`)
li8.append(code8)
li8.append(
  document.createTextNode(`: These elements are used for unordered and ordered lists, respectively.
  `)
);
const li9 = document.createElement('li');
const code9 = document.createElement('code');
code9.append('<li>')
li9.append(code9)
li9.append(
  document.createTextNode(`: This element is used for list items.
  `)
)
const li10 = document.createElement('li');
const code10 = document.createElement('code');
code10.append(`<div> and <span>`)
li10.append(code10)
li10.append(
  document.createTextNode(`: These elements are used for grouping and applying styles to elements on a web page.
  `)
)
a3.append(li1,li2,li3,li4,li5,li6,li7,li8,li9,li10);
const a3text = document.createElement('p');
a3text.append(
  document.createTextNode(`
  These are some of the main elements, but there are many more available, like 
  `)
)
const codetext1 = document.createElement('code');
const codetext2 = document.createElement('code');
const codetext3 = document.createElement('code');
const codetext4 = document.createElement('code');
const codetext5 = document.createElement('code');
const codetext6 = document.createElement('code');
const codetext7 = document.createElement('code');
codetext1.append(` <header>`)
codetext2.append(` <nav>`)
codetext3.append(` <main>`)
codetext4.append(` <footer>`)
codetext5.append(` <form>`)
codetext6.append(` <input>`)
codetext7.append(` <select>`)
a3text.append(codetext1)
a3text.append(document.createTextNode(`,`))
a3text.append(codetext2)
a3text.append(document.createTextNode(`,`))
a3text.append(codetext3)
a3text.append(document.createTextNode(`,`))
a3text.append(codetext4)
a3text.append(document.createTextNode(`,`))
a3text.append(codetext5)
a3text.append(document.createTextNode(`,`))
a3text.append(codetext6)
a3text.append(document.createTextNode(`,`))
a3text.append(codetext7)
a3text.append(
  document.createTextNode(`
  , etc.
  `)
)
a3.append(a3text)
body.append(a3);

const q4 = document.createElement('h1');

q4.append(document.createTextNode('Can you find a picture of the inventor of the web?'));

body.append(q4);

const a4 = document.createElement('p');
const a4img = document.createElement('img');
a4img.setAttribute('src','/images/tim-berners-lee.jpg','alt','A young Tim Berner-Lee')
a4.append(a4img)
a4.append(
  document.createTextNode(`
  
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

const credits = document.createElement('p');
const hyperlink = document.createElement('a');
const superhyperlink = document.createElement('a');
const cc = document.createElement('a');
credits.append(
  document.createTextNode(`
Text from 2023-01-14 conversation with 
`))
hyperlink.setAttribute('href','https://chat.openai.com/chat')
hyperlink.append(document.createTextNode(`ChatGPT`))
credits.append(hyperlink)
credits.append(
  document.createTextNode(`
  Photo of a young Tim Berners-Lee from 
  `)
)
superhyperlink.setAttribute('href','https://www.flickr.com/photos/itupictures/16662336315')
superhyperlink.append(document.createTextNode(`
Flickr
`))
credits.append(superhyperlink)
credits.append(document.createTextNode(` no thanks to ChatGPT. `))
cc.setAttribute('href','https://creativecommons.org/licenses/by/2.0/')
cc.append(document.createTextNode(`CC BY 2.0`))
credits.append(cc)
credits.append(document.createTextNode(`.`))
body.append(credits)