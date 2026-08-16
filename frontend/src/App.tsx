import { useEffect, useState } from "react";
import { getMembers, deleteMember } from "./services/MemberService";
import type { Member } from "./types/Member";
import MemberForm from "./components/MemberForm";
import MemberUploadForm from "./components/MemberUploadForm";
import "./App.css";


function App() {
    const [members, setMembers] = useState<Member[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [showUploadForm, setShowUploadForm] = useState(false);
    const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null);

    useEffect(() => {
        getMembers().then((data) => {
            setMembers(data);
        });
    }, []);

    return (
        <>
            <h1>GymManager</h1>

            <div>
              <button onClick={() => setShowForm(true)}>Adicionar Membro</button>
              {showForm && <MemberForm onSuccess={(members) => { setMembers(members), setShowForm(false)}} />}
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Data de nascimento</th>
                        <th>Altura</th>
                        <th>Peso</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {members.map((member) => [
                        <tr key={member.id}>
                            <td>{member.name}</td>
                            <td>{member.email}</td>
                            <td>{member.phone}</td>
                            <td>{member.birthDate}</td>
                            <td>{member.height} m</td>
                            <td>{member.weight} kg</td>
                            <td>{member.active ? "Ativo" : "Inativo"}</td>
                            <td>
                                <button onClick={() => { setSelectedMemberId(member.id); setShowUploadForm(true); }}> 
                                  Editar
                                </button>
                                <button onClick={async () => {
                                  await deleteMember(member.id);
                                  setMembers(prev => prev.filter(m => m.id !== member.id));
                                }}>
                                  Excluir
                                </button>
                            </td>
                        </tr>,
                        
                        showUploadForm && selectedMemberId === member.id && (
                            <tr key={`form-${member.id}`}>
                                <td colSpan={8}>
                                    <MemberUploadForm 
                                        memberId={member.id} 
                                        onSuccess={(members) => { 
                                            setMembers(members); 
                                            setShowUploadForm(false);
                                        }} 
                                    />
                                </td>
                            </tr>
                        )
                    ])}    
                </tbody>
            </table>
        </>
    );
}

export default App;
