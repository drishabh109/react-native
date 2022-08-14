import { NativeRouter, Route, Routes } from "react-router-native";
import Home from './Home';
import Story from './Story';
const App = () => {
    return ( 
      <NativeRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/story' element={<Story />} />
        </Routes>
        </NativeRouter>
     );
}
 
export default App;
