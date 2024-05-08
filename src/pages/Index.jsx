import React, { useState } from "react";
import { Container, VStack, Heading, Input, Button, Text, Box, List, ListItem, ListIcon, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [sessions, setSessions] = useState([]);
  const [newSession, setNewSession] = useState("");

  const handleAddSession = () => {
    if (newSession.trim() !== "") {
      setSessions([...sessions, newSession]);
      setNewSession("");
    }
  };

  const handleDeleteSession = (index) => {
    const updatedSessions = sessions.filter((_, i) => i !== index);
    setSessions(updatedSessions);
  };

  return (
    <Container centerContent maxW="container.md" padding="4">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl">
          Tutor en Línea
        </Heading>
        <Text>Crear y gestionar sesiones de clases</Text>

        <Box width="100%">
          <Input placeholder="Añadir nueva sesión" value={newSession} onChange={(e) => setNewSession(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleAddSession()} />
          <IconButton aria-label="Add session" icon={<FaPlus />} onClick={handleAddSession} colorScheme="blue" marginLeft="2" />
        </Box>

        <List spacing={3} width="100%">
          {sessions.map((session, index) => (
            <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
              <Text fontSize="lg">{session}</Text>
              <IconButton aria-label="Delete session" icon={<FaTrash />} onClick={() => handleDeleteSession(index)} colorScheme="red" />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
