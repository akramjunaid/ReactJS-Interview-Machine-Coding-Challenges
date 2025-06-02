import React, { useState } from "react";

function TextToDocument() {
  const [text, setText] = useState("");
  const [document, setDocument] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading && text.trim()) {
      setLoading(true);
      insertTextToDocument();
      setText("");
    }
  };

  const insertTextToDocument = () => {
    const newDoc = `<span class="paragraph-highlight-class">${text}</span>`;
    setDocument((prevDoc) => prevDoc + newDoc);
    removeHighlightAfterTime();
  };

  const removeHighlightAfterTime = () => {
    setTimeout(() => {
      setDocument((doc) => {
        const cleanedDoc = doc.replace(/ class="paragraph-highlight-class"/g, "");
        setLoading(false);
        return cleanedDoc;
      });
    }, 2000);
  };

  return (
    <div>
      <div className="body-container">
        <form onSubmit={handleSubmit}>
          <textarea
            className="textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Enter Your Text Here..."
            rows={5}
          ></textarea>
        </form>
      </div>

      <div className="document-container">
        <p className="para">Document</p>
        {document ? (
          <div
            className="document-body"
            dangerouslySetInnerHTML={{ __html: document }}
          ></div>
        ) : (
          <div
            className="document-body"
            style={{ textAlign: "center", color: "#52525240" }}
          >
            Added Content will show here
          </div>
        )}
      </div>
    </div>
  );
}

export default TextToDocument;
