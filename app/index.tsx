import { View, Text, Pressable, ScrollView } from 'react-native'
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '~/constants/colors'
import { Check, ChevronRight, Plus, Search } from 'lucide-react-native'
import { Link, router } from 'expo-router';
import { useNotebookStore } from '~/store/NotebookStore'
import { useTasksStore } from '~/store/tasksStore';
import NavBar from '~/components/navbar';
import * as Haptics from 'expo-haptics';

const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' }); // "Nov"
    const weekday = date.toLocaleString('en-US', { weekday: 'long' }); // "Wednesday"

    return `${day} ${month} ${weekday}`;
};

const HomePage = () => {
    const todayFormatted = formatDate(new Date());
    const notebooks = useNotebookStore((state) => state.getAllNotebooks())
    const currentNotebookId = useNotebookStore((state) => state.currentNotebookId)
    const setCurrentNotebookId = useNotebookStore((state) => state.setCurrentNotebookId)

    const todayList = useTasksStore((state) => state.getTasksByDate(new Date()))
    const toggleTaskCompletion = useTasksStore((state) => state.toggleTaskCompletion)


    const handleNotebookPress = (id: number) => {
        Haptics.selectionAsync()
        setCurrentNotebookId(id)
    }

    useEffect(() => {
        if (currentNotebookId === null && notebooks.length > 0) {
            setCurrentNotebookId(notebooks[0].id)
        }
    }, [notebooks, currentNotebookId, setCurrentNotebookId])

    return (
        <SafeAreaView className='flex-1 py-2 gap-4' style={{ backgroundColor: Colors.offwhite }}>
            <View className='flex-row items-center justify-between px-4'>
                <Text
                    className='text-4xl min-w-fit'
                    style={{ color: Colors.black, fontFamily: 'PermanentMarker' }}
                >Notelook</Text>
                <Link
                    href='/search'
                    className='p-3 rounded-full bg-white shadow-md elevation-none'

                >
                    <Search
                        size={28}
                        color={Colors.black}
                        strokeWidth={1.5}
                    />
                </Link>
            </View>

            <View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ gap: 8, paddingHorizontal: 8 }}
                >
                    {notebooks.map((notebook) => (
                        <Pressable
                            key={notebook.id}
                            className="flex-row items-center justify-between bg-white rounded-3xl px-6 py-4"
                            style={{
                                alignSelf: 'flex-start',
                                backgroundColor: notebook.id === currentNotebookId ? Colors.black : Colors.white,
                            }}
                            onPress={() => handleNotebookPress(notebook.id)}
                        >
                            <Text
                                style={{
                                    color: notebook.id === currentNotebookId ? Colors.white : Colors.black,
                                    fontFamily: 'LexendDeca',
                                    fontSize: 16,
                                    flexShrink: 1, // ✅ Prevent overflow by shrinking if needed
                                }}
                            >
                                {notebook.title}
                            </Text>

                            <Text
                                style={{
                                    color: notebook.id === currentNotebookId ? Colors.white : Colors.black,
                                    fontFamily: 'LexendDeca',
                                    opacity: 0.6,
                                    marginLeft: 8,
                                }}
                            >
                                {notebook.notes}
                            </Text>
                        </Pressable>

                    ))}

                    {/* Add more notebooks here */}
                    <Pressable
                        className="bg-white rounded-3xl px-4 py-4 flex-row items-center justify-between gap-2"
                        style={{
                            alignSelf: 'flex-start',
                            backgroundColor: Colors.white,
                        }}
                        onPress={() => router.push('/newNotebook')}
                    >
                        <Plus
                            size={28}
                            color={Colors.black}
                            strokeWidth={1.7}
                        />
                    </Pressable>
                </ScrollView>
            </View>

            <View
                className='rounded-3xl px-4 py-4 mx-4 gap-4'
                style={{
                    backgroundColor: Colors.lime
                }}
            >
                <View
                    className='flex flex-row items-center justify-between w-full'
                >
                    <View
                        className='flex-col'
                    >
                        <Text
                            className='uppercase text-sm opacity-60'
                            style={{ color: Colors.black, fontFamily: 'LexendDeca', fontWeight: 'black' }}
                        >
                            {todayFormatted}
                        </Text>
                        <Text
                            className='text-2xl text-black font-bold'
                            style={{ color: Colors.black, fontFamily: 'LexendDeca', fontWeight: 'black' }}
                        >
                            Today
                        </Text>
                    </View>
                    <Link
                        href='/today'
                        className='p-3 rounded-full bg-white shadow-md elevation-none ml-auto'
                    >
                        <ChevronRight
                            size={28}
                            color={Colors.black}
                            strokeWidth={1.5}
                        />
                    </Link>
                </View>

                {/* Tasks List */}
                <View style={{ height: 160 }}>
                    <ScrollView
                        contentContainerStyle={{ gap: 8, paddingBottom: 4 }}
                        scrollEnabled={todayList.length > 0}
                        showsVerticalScrollIndicator={false}
                    >

                        {
                            todayList.map((task) => (
                                <Pressable
                                    key={task.id}
                                    className='bg-white rounded-full px-2 py-2 flex-row items-center gap-4'
                                    style={{
                                        backgroundColor: Colors.white,
                                    }}
                                    onPress={() => { toggleTaskCompletion(task.id) }}
                                >
                                    <View
                                        className='rounded-full p-2'
                                        style={{
                                            backgroundColor: task.completed ? Colors.black : Colors.white,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderColor: Colors.black,
                                            borderWidth: 1,
                                        }}
                                    >
                                        <Check
                                            size={16}
                                            color={Colors.white}
                                            strokeWidth={1.5}
                                            style={{ opacity: task.completed ? 1 : 0 }}
                                        />
                                    </View>
                                    <Text
                                        style={{
                                            color: Colors.black,
                                            fontFamily: 'LexendDeca',
                                            fontWeight: 'bold',
                                            opacity: task.completed ? 0.4 : 1,
                                            textDecorationLine: task.completed ? 'line-through' : 'none',
                                        }}
                                    >{task.title}</Text>
                                </Pressable>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>

            <NavBar />

        </SafeAreaView>
    )
}

export default HomePage