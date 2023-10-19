import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ScanIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24">
      <Path d="M24.5 11.5a.5.5 0 01-.5.5H0a.5.5 0 010-1h24a.5.5 0 01.5.5zM.5 7a.5.5 0 00.5-.5v-2C1 2.57 2.57 1 4.5 1h2a.5.5 0 000-1h-2A4.505 4.505 0 000 4.5v2a.5.5 0 00.5.5zm6 16h-2C2.57 23 1 21.43 1 19.5v-2a.5.5 0 00-1 0v2C0 21.981 2.019 24 4.5 24h2a.5.5 0 000-1zm17-6a.5.5 0 00-.5.5v2c0 1.93-1.57 3.5-3.5 3.5h-2a.5.5 0 000 1h2c2.481 0 4.5-2.019 4.5-4.5v-2a.5.5 0 00-.5-.5zm-6-16h2C21.43 1 23 2.57 23 4.5v2a.5.5 0 001 0v-2C24 2.019 21.981 0 19.5 0h-2a.5.5 0 000 1z" />
    </Svg>
  );
}

export default ScanIcon;
