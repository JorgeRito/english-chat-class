
export function Section({className,title,content}:{className:string,title:string, content:string}) {
    return (
    <div className="section">
      <div className={className}>
        <div className="info-container">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        <div className="img-container">
          <img src="https://i.pinimg.com/236x/05/49/86/05498664d54894f92c6523c50c1eb9e6.jpg"></img>
        </div>
      </div>
    </div>
    );
}