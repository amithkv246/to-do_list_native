import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, FlatList, SafeAreaView } from "react-native";

type Task = {
  id: string;
  text: string;
}

export default function App() {
  const [task, setTask] = useState<string>("")
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: task }])
      setTask("")
    }
  }

  return (
    <SafeAreaView style={style.container} >
      <Text style={style.title} >To-Do List</Text>
      <View style={style.inputContainer} >
        <TextInput style={style.input} value={task} onChangeText={setTask} />
        <Button title="Add" onPress={addTask} />
      </View>
      <FlatList style={style.list}
        data={tasks}
        renderItem={({ item }) => (
          <Text style={style.taskItem}>{item.text}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginRight: 10
  },
  taskItem: {
    padding: 20,
    backgroundColor: "white"
  },
  list: {
    flex: 1
  }
})

