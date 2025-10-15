export type ContentCardType = {
  className: string;
  title: string;
  content: string;
  content2?: string[];
  img: string;
};

export function ContentCard({
  className,
  title,
  content,
  content2,
  img
}: ContentCardType) {
  return (
    <>
      <div className={className}>
        <div className="info-container">
          <h1>{title}</h1>
          <p>{content}</p>
          {content2
            ? content2.map((row) => (
                <div>
                  <p>{row}</p>
                </div>
              ))
            : ""}
        </div>
        <div className="img-container">
          <img src={img}></img>
        </div>
      </div>
    </>
  );
}
