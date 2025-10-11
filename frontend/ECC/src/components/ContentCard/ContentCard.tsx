export function ContentCard({
  className,
  title,
  content,
  img
}: {
  className: string;
  title: string;
  content: string;
  img: string
}) {
  return (
    <>
      <div className={className}>
        <div className="info-container">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        <div className="img-container">
          <img src="https://scontent.cdninstagram.com/v/t51.82787-15/542964377_17853410154533292_7125844643190638642_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzcxNDY3ODg1Mzc2ODkwNTY0Mg%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=tFkyQ_en9lgQ7kNvwHGdtn-&_nc_oc=AdmZx8XnAapar-ic1RyY3XHZvjnCfzirnhxORFW_vLZhc4x_cjeb7AttKNe8zbBHQZY5N0R6LMdCClEtQz-W9vkU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=nbhw5lUOmReAEkKMa3RNvQ&oh=00_AfffJ3hc13ArIaf1hBXHkTolH4QjnAFavDIcbQjR8DWeCg&oe=68EEE043"></img>
        </div>
      </div>
    </>
  );
}
