import { router } from 'expo-router';
import {
    ChevronLeft,
    PencilRuler,
    Bold,
    List,
    CheckSquare,
    Code,
    Heading1,
    Heading2,
    Heading3,
} from 'lucide-react-native';
import {
    View,
    Text,
    Pressable,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '~/constants/colors';

const formatDate = (date: Date) => {
    const options = {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: '2-digit',
    } as const;
    return new Date(date).toLocaleDateString('en-GB', options).replace(',', '');
};

const NewNote = () => {
    const todayFormatted = formatDate(new Date());
    const titleInputRef = useRef<TextInput>(null);
    const noteInputRef = useRef<TextInput>(null);

    useEffect(() => {
        const hideSub = Keyboard.addListener('keyboardDidHide', () => {
            titleInputRef.current?.blur();
            noteInputRef.current?.blur();
        });

        return () => hideSub.remove();
    }, []);

    return (
        <SafeAreaView
            className="flex-1"
            style={{ backgroundColor: Colors.offwhite }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    className="flex-1"
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
                >
                    <View className="flex-1 justify-between">
                        <ScrollView
                            contentContainerStyle={{ paddingBottom: 16 }}
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}
                        >
                            {/* Header */}
                            <View className="flex-row items-center justify-between px-4 pt-2 mb-4">
                                <Pressable
                                    className="rounded-full shadow-md"
                                    onPress={() => router.back()}
                                >
                                    <ChevronLeft size={28} color={Colors.black} strokeWidth={1.5} />
                                </Pressable>

                                <Pressable className="p-3 rounded-full bg-white shadow-md">
                                    <PencilRuler size={28} color={Colors.black} strokeWidth={1.5} />
                                </Pressable>
                            </View>

                            {/* Title */}
                            <View className="px-4 mb-2">
                                <TextInput
                                    ref={titleInputRef}
                                    className="text-4xl"
                                    multiline
                                    placeholder="New Note"
                                    scrollEnabled={false}
                                    style={{
                                        color: Colors.black,
                                        fontFamily: 'LexendDeca',
                                    }}
                                    selectionColor={Colors.lime}
                                    cursorColor={Colors.black}
                                />
                                <Text
                                    className="text-lg pl-1"
                                    style={{
                                        color: Colors.black,
                                        fontFamily: 'LexendDeca',
                                        opacity: 0.6,
                                    }}
                                >
                                    {todayFormatted}
                                </Text>
                            </View>

                            {/* Note Body */}
                            <View className="px-4">
                                <TextInput
                                    ref={noteInputRef}
                                    placeholder="Write your note here..."
                                    multiline
                                    textAlignVertical="top"
                                    returnKeyType="default"
                                    selectionColor={Colors.lime}
                                    cursorColor={Colors.black}
                                    keyboardAppearance="dark"
                                    keyboardType="default"
                                    autoCapitalize="sentences"
                                    autoCorrect
                                    scrollEnabled
                                    style={{
                                        fontFamily: 'LexendDeca',
                                        color: Colors.black,
                                        lineHeight: 24,
                                        minHeight: 500,
                                        paddingBottom: 40,
                                    }}
                                />
                            </View>
                        </ScrollView>

                        {/* Bottom Formatting Toolbar */}
                        <View className="px-4 pb-4">
                            <ScrollView
                                horizontal
                                className="p-2 bg-white border border-gray-200 rounded-xl shadow-sm"
                                contentContainerStyle={{ alignItems: 'center', gap: 8 }}
                                keyboardShouldPersistTaps="handled"
                                showsHorizontalScrollIndicator={false}
                                keyboardDismissMode="on-drag"
                            >
                                <Pressable className="border border-gray-200 rounded-lg p-2">
                                    <Bold size={22} color={Colors.black} />
                                </Pressable>
                                <Pressable className="border border-gray-200 rounded-lg p-2">
                                    <Heading1 size={22} color={Colors.black} />
                                </Pressable>
                                <Pressable className="border border-gray-200 rounded-lg p-2">
                                    <Heading2 size={22} color={Colors.black} />
                                </Pressable>
                                <Pressable className="border border-gray-200 rounded-lg p-2">
                                    <Heading3 size={22} color={Colors.black} />
                                </Pressable>
                                <Pressable className="border border-gray-200 rounded-lg p-2">
                                    <List size={22} color={Colors.black} />
                                </Pressable>
                                <Pressable className="border border-gray-200 rounded-lg p-2">
                                    <CheckSquare size={22} color={Colors.black} />
                                </Pressable>
                                <Pressable className="border border-gray-200 rounded-lg p-2">
                                    <Code size={22} color={Colors.black} />
                                </Pressable>
                            </ScrollView>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

export default NewNote;
