import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {

    const [textInput, setTextInput] = useState("");
    const [imageResult, setImageResult] = useState();
  
    async function onTextSubmit(event) {
      event.preventDefault();
      const imageResponse = await fetch("/api/imageGen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: textInput }),
      });
      
      const imageData = await imageResponse.json();
      setImageResult(imageData.imageResult);
      setTextInput("");
  };
    
  return (
    <div>
      <Head>
        <title>Photo generator</title>
        <link rel="icon" href="/cam-icon.png" />
      </Head>

      <main className={styles.main}>
        <img src="/cam-icon.png" className={styles.icon} />
        <h3>Photo generator</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Ej. Green horse with purple eyes"
            value={promptInput}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <input type="submit" value="Generate image" />
        </form>
        <br></br>
        <img className="result-image" src={result} />
        <br></br>
        <Link href="/">
          <a>
            Volver al inicio
          </a>
        </Link>
      </main>
    </div>
  );

}