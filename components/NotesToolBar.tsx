import React from 'react';
import { View, Pressable, StyleSheet, ScrollView } from 'react-native';
import {
    Bold, Italic, Underline, Heading1, Image,
    MessageSquare, Trash2, AtSign, CheckSquare, Plus,
    Heading2,
    Heading3,
    CheckSquare2
} from 'lucide-react-native';
import { Colors } from '~/constants/colors';
import { useKeyboard } from '~/hooks/useKeyboard';

type NotesToolBarProps = {
    onBold?: () => void;
    onItalic?: () => void;
    onUnderline?: () => void;
    onHeading1?: () => void;
    onTodo?: () => void;
    onMention?: () => void;
    onComment?: () => void;
    onImage?: () => void;
    onDelete?: () => void;
    onAddBlock?: () => void;
};

const NotesToolBar: React.FC<NotesToolBarProps> = (props) => {
    const { keyboardHeight } = useKeyboard();

    return (
        <View
            style={[
                styles.toolbarContainer,
                {
                    bottom: keyboardHeight ? keyboardHeight + 12 : -100, // hidden when keyboard is closed
                },
            ]}
        >
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
                <ToolbarButton onPress={props.onHeading1} icon={<Heading1 size={20} color={Colors.black} />} />
                <ToolbarButton onPress={props.onHeading1} icon={<Heading2 size={20} color={Colors.black} />} />
                <ToolbarButton onPress={props.onHeading1} icon={<Heading3 size={20} color={Colors.black} />} />
                <ToolbarButton onPress={props.onUnderline} icon={<Underline size={20} color={Colors.black} />} />
                <ToolbarButton onPress={props.onItalic} icon={<Italic size={20} color={Colors.black} />} />
                <ToolbarButton onPress={props.onAddBlock} icon={<Bold size={20} color={Colors.black} />} />
                <ToolbarButton onPress={props.onTodo} icon={<CheckSquare2 size={20} color={Colors.black} />} />
                <ToolbarButton onPress={props.onImage} icon={<Image size={20} color={Colors.black} />} />
                <ToolbarButton onPress={props.onMention} icon={<AtSign size={20} color={Colors.black} />} />
                <ToolbarButton onPress={props.onComment} icon={<MessageSquare size={20} color={Colors.black} />} />
                <ToolbarButton onPress={props.onBold} icon={<Bold size={20} color={Colors.black} />} />
                <ToolbarButton onPress={props.onDelete} icon={<Trash2 size={20} color={Colors.black} />} />
            </ScrollView>
        </View>
    );
};

const ToolbarButton = ({ onPress, icon }: { onPress?: () => void; icon: React.ReactNode }) => (
    <Pressable style={styles.button} onPress={onPress}>
        {icon}
    </Pressable>
);

const styles = StyleSheet.create({
    toolbarContainer: {
        position: 'absolute',
        left: 24,
        right: 24,
        zIndex: 100,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        padding: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 8,
    },
    row: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    button: {
        padding: 6,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
});

export default NotesToolBar;
