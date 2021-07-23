import { Route, Switch } from 'react-router-dom';
import TravelerInfos from './core/TravelerInfos';
import FinalScreen from './core/FinalScreen';

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={TravelerInfos}/>
      <Route path="/end" component={FinalScreen}/>
    </Switch>
  );
};

export default MainRouter;
