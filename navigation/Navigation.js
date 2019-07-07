import { createStackNavigator , createAppContainer } from 'react-navigation'; 
import Login from '../components/Login'
import Home from '../components/Home'

const StackNavigator = createStackNavigator(
    {
        Login:{
            screen: Login,
            navigationOptions: {
                title:"Login",
                header :null
            }
        },
        Home:{
            screen: Home,
            navigationOptions: {
                title:"Home",
                header : null
            }
        },
    }
)
export default createAppContainer(StackNavigator)