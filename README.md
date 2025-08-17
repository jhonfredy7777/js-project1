# javascript-project1: Drag & Drop colorGame

This is a simple project whose main goal is to create an enjoyable and relaxing game consisting of coloring figures with different shapes. Behind the scenes, the challenge is to use the document object model (DOM) to dynamically change the properties and content of the HTML objects as the user wants, combining basic and advanced JavaScript programming. 

Combining the strengths and advantages of HTML, CSS, and JavaScript to achieve the same functionality would've been simpler, clearer, and easier. But I wanted to do the most I could with JavaScript alone to demonstrate my knowledge and skills in this amazing language. Of course, in a real-life project, simplicity, functionality, and efficiency always go hand in hand.



---

## 🚀 Characteristics
- Intuitive and engaging user interface designed for a smooth and fun experience.
- user experience — game elements are created on demand, giving a fresh and interactive feel.
- Dynamic HTML element creation — elements are generated on the fly, not just manipulated via the DOM.
- Advanced use of the Drag and Drop API, leveraging the dataTransfer object for seamless element movement.
- Event-driven architecture, reacting to user interactions in real time. 
- Lightweight and dependency-free, built using pure JavaScript without external libraries.




---

## 🛠️ Technologies

- Django 5.2.4 — Just to connect easily to the localhost server.
- HTML, CSS and Javascript.

---

## ⚙️ Installation

### Clone this repository:
   ```
   git clone https://github.com/jhonfredy7777/js-project1.git
   ```
   

### Inside the repository js-project1 (main), create and activate a virtual environtment:
   ####  Create virtual environment
first, change directory.
```
   cd js-project1
```
then create the virtual environment

**On Windows (cmd or PowerShell)**:
```bat
python -m venv env
```

**On Git Bash / Linux / Mac**:
```bash
python3 -m venv env
```

---

#### Activate virtual environment

**On Command Prompt (cmd)**:
```bat
.\env\Scripts\activate.bat
```

**On Git Bash**:
```bash
source env/Scripts/activate
```

**On Linux/Mac**:
```bash
source env/bin/activate
```

**On PowerShell**:
```powershell
.\env\Scripts\Activate.ps1
```
> 💡 If script execution is restricted in PowerShell, run:
> ```powershell
> Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
> ```
> Then accept with `S` and press Enter.



### Install dependencies:
```
   pip install -r requirements.txt
```   

### Apply migrations and run the server:
first, change to the root directory where the manage.py file is located.
```
cd jscolorgame
```
then run the server
```
   python manage.py migrate
   python manage.py runserver
```   

### Access in your browser:
   http://127.0.0.1:8000/

---

## 🎥 Demo

Experience the project in action!  
Click below to watch a short demo of the game:  

[![Watch the demo](https://img.youtube.com/vi/0-K7f90AlhY/maxresdefault.jpg)](https://www.youtube.com/watch?v=0-K7f90AlhY)

![DemoGif](demo/demo.gif)




## Usage
Run the website (python manage.py runserver), go to your local host `http://127.0.0.1:8000/` and enjoy.

## Contributions
Contributions are welcome! Open an issue or make a pull request.


## 📄 Licence
MIT © 2025 Jhon Fredy
   