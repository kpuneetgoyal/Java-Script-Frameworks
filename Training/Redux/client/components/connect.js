import {connect} from 'react-redux';
import * as allActions from '../actions/actions'
import { bindActionCreators } from 'redux';
import MainComponent from './main.component';

function mapStateToProps(storeData){
    return{
        allUsers : storeData.users,
        allPosts : storeData.posts
    }
}
function mapDispactchToProps(dispatch){
    return bindActionCreators(allActions,dispatch);
}
let app = connect(mapStateToProps,mapDispactchToProps)(MainComponent)
export default app; 