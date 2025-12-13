# YouTube Ad Blur & Smart Skip

A lightweight JavaScript snippet that improves the YouTube ad experience by **auto-blurring ads**, **muting them**, **attempting to auto-skip**, and still giving users control to **watch their favourite ads** when they want.

---

## ✨ Features

* 🔇 Automatically **mutes ads**
* 🌫️ **Blurs top 80%** of the video during ads
* ⏭️ Continuously **attempts to click Skip Ad**
* 🎬 **Center "Watch Ad" button** to:

  * Unblur the video
  * Unmute audio
  * Stop auto-skip
  * Watch the ad normally
* 🔁 Automatically resets after the ad finishes

---

## 🧠 How It Works

1. Detects ad playback using YouTube's `.ad-showing` class
2. Adds a blur overlay and center button
3. Uses real pointer + mouse event sequences to attempt skipping ads
4. Allows **manual override** for favourite ads

> ⚠️ Note: YouTube restricts full automation. Some ads still require **one real user interaction**.

---

## 🚀 Usage

### Option A: Run via DevTools (Quick Test)

1. Open YouTube
2. Open DevTools (`F12` or `Ctrl + Shift + I`)
3. Paste the script into the Console and press Enter

---

## 🧩 Install as a Local Chrome Extension (Unpacked)

Follow these steps to load the extension locally:

### 1️⃣ Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/yasertalha/youtube-ad-blur.git
```

### 2️⃣ Open Google Chrome

Launch the Chrome browser.

### 3️⃣ Open the Extensions Page

Type the following in the address bar and press Enter:

```
chrome://extensions/
```

### 4️⃣ Enable Developer Mode

Toggle **Developer mode** ON (top‑right corner).

### 5️⃣ Click **Load unpacked**

You will see three buttons:

* Load unpacked
* Pack extension
* Update

Click **Load unpacked**.

### 6️⃣ Select the Extension Folder

Choose the folder you cloned (`youtube-ad-blur`).

### 7️⃣ Extension Installed 🎉

The extension will appear in the list, and its icon will show near the Chrome toolbar.

### 8️⃣ Open YouTube

Enjoy a cleaner ad experience ✨

🎉 **Happy coding — Happy ad‑free / ad‑hidden YouTube!** 🎊

---

## 🧩 Script Behavior Summary

| Scenario             | Result               |
| -------------------- | -------------------- |
| Ad starts            | Muted + Blurred      |
| Skip available       | Auto-click attempted |
| User clicks Watch Ad | Normal playback      |
| Ad ends              | Auto mode resets     |

---

## 🛠️ Customization

You can easily tweak:

* Blur strength

```js
backdropFilter: "blur(10px)";
```

* Blur height

```js
height: "80%";
```

* Button text

```js
btn.textContent = "Watch Ad";
```

---

## 📦 Future Improvements (Optional)

* Chrome Extension (Manifest v3)
* Keyboard shortcuts (A = Watch Ad)
* YouTube-native UI styling
* Session-based ad preferences

---

## ⚖️ Disclaimer

This project is for **educational and personal-use purposes only**.
YouTube may change its internal behavior at any time.

---

## 👤 Author

Built by **Syed Yaser Mohasin**

If you'd like this converted into a **Chrome extension** or enhanced further, feel free to ask 🚀
