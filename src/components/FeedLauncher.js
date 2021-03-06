import React from 'react';
import {View, FlatList} from 'react-native';
import {Feed} from './Feed';

export default function FeedLauncher({data, navigation}) {
  const renderItem = ({item}) => {
    return <Feed item={item} navigation={navigation} />;
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
