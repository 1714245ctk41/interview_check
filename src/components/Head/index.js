import "./Head.css";

const Head = () => {
  return (
    <header className="container header_container">
      <img
        width={60}
        height={60}
        src={process.env.PUBLIC_URL + "/icon_page.png"}
        alt="icon"
      />
      <address>
        <p style={{ textAlign: "right" }}>
          Handicrafted by <br /> Jim HLS{" "}
        </p>
        <img
          width={60}
          height={60}
          src={process.env.PUBLIC_URL + "/avatar.png"}
          alt="avatar"
        />
      </address>
    </header>
  );
};

export default Head;
