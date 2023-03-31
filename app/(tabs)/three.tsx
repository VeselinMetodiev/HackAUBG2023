import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Something() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <View>
      {posts.map((post) => (
        <View key={post.id}>
          <Text>{post.title}</Text>
          <Text>{post.body}</Text>
        </View>
      ))}
    </View>
  );
}
