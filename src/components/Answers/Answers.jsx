// import React, { useState } from "react";
// import { Box, Button, Textarea } from "@chakra-ui/react";
// import axios from "axios";

// const Answers = ({ answers, user, _idDoubt }) => {
//     const [newAnswer, setNewAnswer] = useState("");

//     const handleAnswerSubmit = async () => {
//         try {
//             if (!newAnswer.trim()) {
//                 return;
//             }

//             const answerData = {
//                 reply: newAnswer,
//                 likes: 0,
//                 _idDoubt,
//             };

//             const response = await createAnswer(answerData);

//             setAnswers([...answers, response.answer]);

//             setNewAnswer("");
//         } catch (error) {
//             console.error("Error al crear la respuesta:", error);
//         }
//     };

//     return (
//         <div>
//             {answers.map((answer) => (
//                 <Box key={answer._id}>
//                     <p>{answer.reply}</p>
//                 </Box>
//             ))}

//             <Textarea value={newAnswer} onChange={(e) => setNewAnswer(e.target.value)} placeholder="Escribe tu respuesta aquí..." />
//             <Button onClick={handleAnswerSubmit}>Enviar Respuesta</Button>
//         </div>
//     );
// };

// export default Answers;
