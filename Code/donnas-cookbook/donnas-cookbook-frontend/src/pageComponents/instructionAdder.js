function InstructionAdder({newInstruction, setNewInstruction, instructionList, setInstructionList}) {

    function handleNewInstruction(e) {
        setNewInstruction(e.target.value)
        }

        function handleInstructionAdd(e) {
            e.preventDefault()
            setInstructionList([...instructionList, newInstruction])
            setNewInstruction("")
        }

    return (
        <form>
        <input value={newInstruction} onChange={handleNewInstruction}></input>
        <br /> <br />
        <button onClick={handleInstructionAdd}>Add Instruction</button>
        </form>
    )
}

export default InstructionAdder