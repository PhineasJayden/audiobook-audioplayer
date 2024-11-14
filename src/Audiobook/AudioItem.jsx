import styled from "styled-components";

const AudioContainer = styled.div`
  background-color: transparent;
  align-self: stretch;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  cursor: pointer;
  height: 62px;
  padding: 20px;
  &:first-of-type {
    margin-top: 150px;
  }
  &:last-of-type {
    margin-bottom: 50px;
  }
`;

const Img = styled.img`
  height: 62px;
  width: 62px;
  object-fit: cover;
  border-radius: 21px;
  margin-right: 10px;
  box-shadow: var(--shadow-small);
`;

const AudioInfo = styled.div`
  flex: 1;
  display: flex;
  justify-self: right;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 20px;
`;

function AudioItem({
  title,
  id,
  setcurChapter,
  setShowPlaylist,
  img,
  duration,
}) {
  function handleClick() {
    setcurChapter(id);
    setShowPlaylist(false);
  }

  return (
    <AudioContainer onClick={handleClick}>
      <Img src={img} />
      <AudioInfo>
        <h4>{title}</h4>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <p>Kapitel {id + 1}</p>
          <p>{duration}</p>
        </div>
      </AudioInfo>
    </AudioContainer>
  );
}
export default AudioItem;
