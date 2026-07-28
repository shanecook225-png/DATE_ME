<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Une Question Pour Toi ❤️</title>

    <link rel="stylesheet" href="style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Pacifico&display=swap" rel="stylesheet">

    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
</head>

<body>

<audio id="bgMusic" loop>
    <source src="assets/music/musique.mp3" type="audio/mpeg">
</audio>

<div class="musicBtn" id="musicBtn">

    🔊

</div>

<div class="hearts"></div>

<!-- ====================== -->
<!-- PAGE 1 -->
<!-- ====================== -->

<section class="screen active" id="screen1">

<div class="content">

<h3>Salut 😊</h3>

<h1>J'ai quelque chose de très important à te demander...</h1>

<p>

Mais avant...

Promets-moi d'aller jusqu'au bout ❤️

</p>

<button id="startBtn">

Continuer

</button>

</div>

</section>

<!-- ====================== -->
<!-- PAGE 2 -->
<!-- ====================== -->

<section class="screen" id="screen2">

<div class="content">

<h2 id="typingText"></h2>

<div class="question">

<h1>

Ça te dirait un date avec moi ? 🥹❤️

</h1>

</div>

<div class="buttons">

<button id="yesBtn">

❤️ OUI

</button>

<button id="noBtn">

🙈 NON

</button>

</div>

<div id="funnyMessage"></div>

</div>

</section>

<!-- ====================== -->
<!-- PAGE 3 -->
<!-- ====================== -->

<section class="screen" id="screen3">

<div class="content">

<div class="success">

<h1>

🥹❤️

</h1>

<h2>

Tu viens de rendre ma journée incroyable.

</h2>

<p>

Merci d'avoir accepté.

J'ai vraiment hâte de partager ce moment avec toi.

</p>

</div>

<button id="openLetter">

💌 Ouvrir une lettre

</button>

</div>

</section>

<!-- ====================== -->
<!-- PAGE 4 -->
<!-- ====================== -->

<section class="screen" id="screen4">

<div class="letter">

<h1>

Pour Toi ❤️

</h1>

<p>

Je ne sais pas où cette aventure nous mènera.

Mais je sais une chose...

J'aimerais vraiment apprendre à mieux te connaître.

Sans pression.

Sans obligation.

Juste partager un beau moment avec toi.

Parce que je pense sincèrement que tu en vaux la peine.

Alors...

Est-ce qu'on se crée un joli souvenir ensemble ?

❤️

</p>

<button id="continueForm">

Continuer

</button>

</div>

</section>

<!-- ====================== -->
<!-- PAGE 5 -->
<!-- ====================== -->

<section class="screen" id="screen5">

<div class="formCard">

<h1>

Notre Date ❤️

</h1>

<div class="inputBox">

<label>

📅 Choisis une date

</label>

<input type="date" id="date">

</div>

<div class="inputBox">

<label>

🕒 Choisis une heure

</label>

<input type="time" id="heure">

</div>

<div class="inputBox">

<label>

🍕 Que veux-tu faire ?

</label>

<select id="activity">

<option>Pizza 🍕</option>

<option>Café ☕</option>

<option>Cinéma 🍿</option>

<option>Glace 🍨</option>

<option>Balade 🌅</option>

<option>Restaurant 🍽️</option>

<option>Bowling 🎳</option>

<option>Surprends-moi ❤️</option>

</select>

</div>

<div class="inputBox">

<label>

📍 Où aimerais-tu aller ?

</label>

<input
type="text"
placeholder="Exemple : Pizza Doudou"
id="lieu">

</div>

<button id="finishBtn">

Confirmer ❤️

</button>

</div>

</section>

<!-- ====================== -->
<!-- PAGE 6 -->
<!-- ====================== -->

<section class="screen" id="screen6">

<div class="ticket">

<h1>

🎉

</h1>

<h2>

Notre premier rendez-vous est confirmé ❤️

</h2>

<div class="resume">

<p>

📅 <span id="resumeDate"></span>

</p>

<p>

🕒 <span id="resumeHeure"></span>

</p>

<p>

🍕 <span id="resumeActivity"></span>

</p>

<p>

📍 <span id="resumeLieu"></span>

</p>

</div>

<h3>

J'ai vraiment hâte de te voir ❤️

</h3>

<button onclick="location.reload()">

Recommencer

</button>

</div>

</section>

<script type="module" src="script.js"></script>

</body>
</html>
