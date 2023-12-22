import TodoModel from "../models/todo.model.js";

// CREATE TODO
export const createTodo = async (req, res) => {
  try {
    //  CHECK IF THE TASK ALREADY EXISTS
    const existingTodo = await TodoModel.findOne({ task: req.body.task })

    if (existingTodo) {
      return res.status(400).json({
        message: "Task already exists"
      })
    }

    // IF THE TASK DOESN'T EXIST, CREATE A NEW TODO
    const newTodo = new TodoModel(req.body);
    const savedData = await newTodo.save();
    if (savedData) {
      res.status(201).json({
        data: newTodo,
        message: "Successfully added new Todo"
      })
    } else {
      res.status(400).json({
        message: 'Something went wrong!'
      })
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

// READ ALL TODOs
export const readTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find();
    if (todos) {
      res.status(200).json({
        data: todos,
        message: 'Successfully fetched all todos'
      })
    } else {
      res.status(400).json({
        message: 'Something went wrong!'
      })
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

// READ SINGLE TODO
export const readTodo = async (req, res) => {
  try {
    const id = req.params.id
    const todoData = await TodoModel.findById(id);
    if (todoData) {
      res.status(200).json({
        data: todoData,
        message: "Successfully fetched a todo"
      })
    } else {
      res.status(400).json({
        message: 'Something went wrong'
      })
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

// UPDATE SINGLE TODO
export const updateTodo = async (req, res) => {
  try {
    const id = req.params.id
    // CHECK IF THE UPDATED TASK VALUE ALREADY EXISTS
    const existingTodo = await TodoModel.findOne({
      task: req.body.task,
      _id: { $ne: id } //EXCLUDE THE CURRENT TODO BEING UPDATED
    })

    if (existingTodo) {
      return res.status(400).json({
        message: "Task already exists"
      })
    }

    // IF TASK DOESNT EXIST, UPDATE THE CURRENT TODO
    const todoData = await TodoModel.findByIdAndUpdate(id, req.body)
    if (todoData) {
      res.status(200).json({
        data: todoData,
        message: "Successfully updated todo"
      })
    } else {
      res.status(400).json({
        message: 'Something went wrong'
      })
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

// DELETE SINGLE TODO
export const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id
    const todoData = await TodoModel.findByIdAndDelete(id)
    if (todoData) {
      res.status(200).json({
        data: todoData,
        message: "Successfully deleted todo"
      })
    } else {
      res.status(400).json({
        message: 'Something went wrong'
      })
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

// DELETE ALL TODOS
export const deleteTodos = async (req, res) => {
  try {
    const todoDatas = await TodoModel.deleteMany()
    if (todoDatas) {
      {
        res.status(200).json({
          data: todoDatas,
          message: "Successfully deleted all todos"
        })
      }
    } else {
      res.status(400).json({
        message: 'Something went wrong'
      })
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}