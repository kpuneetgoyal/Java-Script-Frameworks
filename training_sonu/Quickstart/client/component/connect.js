import {connect} from 'react-redux';
 import * as allactions from '../actions/actions';
import { bindActionCreators } from 'redux';
import MainComponent from './main.component';

function mapDispatchToProps(dispatch){
    return bindActionCreators(allactions,dispatch);
}

function mapStateToProps(storeData){
    return  {
        allUsers:storeData.users,
        allPosts:storeData.post
    }
}
var app=connect(mapStateToProps,mapDispatchToProps)(MainComponent);
export default app;