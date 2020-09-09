import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Searchbar } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

import {AdminContext} from '../../context/AdminContext';
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
import adminStyles from "./AdminStyles";

const ClassList = ({ navigation }) => {
  const { adminState, setCurrClass, currClass, getCurrClassTeachers, classObj, getClasses } = React.useContext(AdminContext);

  const [searchQuery, setSearchQuery] = React.useState('');
  const [filtered, setFiltered] = React.useState(adminState.classes);
  const onChangeSearch = query => {
      setSearchQuery(query);
    };

  
  React.useEffect(() => {
    if(searchQuery === ''){
        setFiltered(adminState.classes);
    } else {
        setFiltered(adminState.classes.filter((class_) => {
            if(class_.name.toLowerCase().includes(searchQuery.toLowerCase())){
                return(class_);
            }
        }));
    }
  }, [searchQuery]);

  return (
    <View>
        <Searchbar
            placeholder="Search class.."
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
        <ScrollView>
        { 
            filtered ? (
                filtered.map(class_ => (
                    <View key={class_._id}>
                        <TouchableOpacity onPress={() => {
                                setCurrClass(class_._id);
                                navigation.navigate('ClassView');
                            }}
                        >
                            <Card style={adminStyles.card}>
                                <Card.Title
                                title={class_.name}
                                left={LeftContent}
                                />
                                <Card.Content></Card.Content>
                            </Card>
                        </TouchableOpacity>
                    </View>
                )) 
            ) : (
                <Card style={adminStyles.card}>
                    <Card.Title 
                        title="None"
                        left={LeftContent} 
                    />
                </Card>
            )
        }
        </ScrollView>
    </View>
  );
};

export default ClassList;
