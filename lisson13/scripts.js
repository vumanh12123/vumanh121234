const listudent = [
    {
        id: 1,
        name:'Nguyễn Văn A',
        gender: 'nam',
        math_score: 10,
        english_score: 10,
        literature_score: 10,
    },
    {
        id: 2,
        name:'Trần Thị B',
        gender: 'girl',
        math_score: 8,
        english_score: 8,
        literature_score: 9,
    },
 
];
   
const calAverageScỏe = (math_score, english_score, literature_score) =>
    ((math_score + english_score + literature_score)/3).toFixed(2);

    let stringHTML = '';
    for (let student of liStudent) {
        console.log(stident);
        stringHTML +=
        <tr>
            <th scope="row">${student.id}</th>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.math_score}</td>
            <td>${student.english_score}</td>
            <td>${student.literature_score}</td>
            <td>${calAverageScore(
                        student.math_score,
                        student.english_score,
                        student.literature_score,
            )}</td>
    <td>
        <button class='btn btn-success'>Update</button>
        <button
            class='btn btn-danger'
            onclick='deletStudent(${student.id})'
        >
            Delete     
        </button>
    </td>
        </tr>
    }

    document.getElementById('show').innerHTML = stringHTML;

    document.getElementById('btn-create').addEventListener('click', () =>  {
        console.log('create');
        const id = document.getElementById('id');
        const name = document.getElementById('name');
        const gender = document.getElementById('gender');
        const math_score = document.getElementById('math_score');
        const english_score = document.getElementById('english_score');
        const literature_score= document.getElementById('literature_score');
        // validate input
        const newStudent = {
            id: Number(id),
            name,
            gender,
            math_score:Number(math_score),
            english_score:Number(english_score),
            literature_score:Number(literature),
            
        };
        liStudent.push(newStudent);
        renderListStudents();
    });

    renderListStudents();

    window.deleteStudent = deleteStudent;