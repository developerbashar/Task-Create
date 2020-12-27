let taskField = document.getElementById('task-field')
let allTaskField = document.getElementById('allTaskField')
//Enter keypress event
taskField.addEventListener('keypress', function(event){
    if(this.value === ''){
        alert('Please Something Write There')
    }else if(event.key === 'Enter'){
        createTaskElement(allTaskField, event.target.value)
        this.value = ''
    }
})
//Task Create Function
function createTaskElement(parentElement, taskElement){
    //Create col-md-3 Element
    let createCol = document.createElement('div')
    createCol.className = 'col-md-3'
    //Create div Element
    let createDiv =  document.createElement('div')
    createDiv.className = 'single-task-field d-flex'
    //Create paragraph Element
    let createP =  document.createElement('p')
    createP.className = 'text-white'
    createP.innerHTML = taskElement
    createDiv.appendChild(createP)
    createCol.appendChild(createDiv)
    parentElement.appendChild(createCol)
    //create span and task delegation event
    createSpan(createDiv, createDiv)
    //Create controll panel
    createControlPanel(createDiv)
    
}
//Span HTML Element Create and delegationElement Function
function createSpan(parent, delegationElement){
    let span = document.createElement('span')
    span.className = 'text-white d-flex ml-auto'
    span.innerHTML = '<i class="fas fa-times-circle"></i>'
    //Task delegation
    span.addEventListener('click', function(){
        delegationElement.remove()
    })
    parent.appendChild(span)
}
//Create controll panel Function
function createControlPanel(parent){
    let controlPanel = document.createElement('div')
    controlPanel.className = 'control-pannel d-flex'
    controlPanel.style.visibility = 'hidden'
    parent.onmouseover = function(){
        controlPanel.style.visibility = 'visible'
    }
    parent.onmouseout = function(){
        controlPanel.style.visibility = 'hidden'
    }
    parent.appendChild(controlPanel)
    //Create color palete
    let createcolorPalette = createColorPalette(parent)
    controlPanel.appendChild(createcolorPalette)
    //Create Edit Button
    createEditBtn(controlPanel, parent)
}
//Create Edit Button Function
function createEditBtn(controlPanel, parent){
    let span = document.createElement('span')
    span.className = 'icon text-white d-flex ml-auto'
    span.innerHTML = '<i class="fas fa-edit"></i>'
    span.addEventListener('click', function(){
        let p = parent.querySelector('p')
        let textArea = document.createElement('textarea')
        textArea.className = 'inner-textarea'
        textArea.style.width = parent.offsetWidth + 'px'
        textArea.style.height = parent.offsetHeight + 'px'
        textArea.innerHTML = p.innerHTML
        parent.appendChild(textArea)
        textArea.addEventListener('keypress', function(e){
            if(e.key === 'Enter'){
                p.innerHTML = this.value
                parent.removeChild(this)
            }
        })
    })
    controlPanel.appendChild(span)
}
//Create color palette Function
function createColorPalette(parent){
    let colors = ['salmon', 'purple', 'olive', 'green', 'teal']
    let createDiv = document.createElement('div')
    createDiv.className = 'color-box d-flex'
    colors.forEach(color =>{
        let Div = document.createElement('span')
        Div.className = 'color-round d-flex justify-content-center ml-1'
        Div.style.background = color
        Div.addEventListener('click', function(){
            parent.style.background = color
        })
        createDiv.appendChild(Div)
    })
    return createDiv
}