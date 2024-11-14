import styled from 'styled-components';
import Audiobook from './Pages/Audiobook.jsx';
import GlobalStyles from './styles/GlobalStyles.js';

const StyledAppLayout = styled.main`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  align-items: center;
  text-align: center;

  scroll-timeline-name: --MainTimeline;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledAppLayout>
        <Audiobook />
      </StyledAppLayout>
    </>
  );
}

export default App;
