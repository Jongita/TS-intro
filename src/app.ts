const nameDOM=<HTMLInputElement>document.getElementById("name");
const surnameDOM=<HTMLInputElement>document.getElementById("surname");
const salaryDOM=<HTMLInputElement>document.getElementById("salary");
const workersDOM=<HTMLUListElement>document.getElementById("workerlist")
const addBtn=document.getElementById("add")!;
const rezultatasDiv=document.getElementById("rezultatas")!;


class Workers{
  constructor (public name:string, public surname:string, public salary:number){

  }

  public gpm():number{
    return this.salary * 0.2;
  }

  public psd():number {
    return this.salary * 0.0698;
  }

  public vsd():number {
    return this.salary * 0.1252;
  }
}

const WorkerMas:Workers[]=[];
 
const showlist=()=>{
    const name=nameDOM.value;
    const surname=surnameDOM.value;
    const salary=salaryDOM.valueAsNumber;
    WorkerMas.push(new Workers(name,surname, salary));
    console.log(WorkerMas);

    workersDOM.innerHTML='';
      WorkerMas.forEach((w, i)=>{
        const li = document.createElement('li');
        li.textContent = `${w.name} ${w.surname} - Atlyginimas: ${w.salary}€, GPM: ${w.gpm()}€, PSD: ${w.psd()}€, VSD: ${w.vsd()}€`;
        workersDOM.appendChild(li);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Ištrinti";
        // deleteBtn.className = "btn btn-primary float-end btn-sm";

        deleteBtn.onclick = () => {
        WorkerMas.splice(i, 1);
        showlist()
      };
      workersDOM.appendChild(deleteBtn);
    });
}


addBtn.onclick = showlist;