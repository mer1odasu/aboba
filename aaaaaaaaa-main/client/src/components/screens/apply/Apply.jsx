import {useQuery, useMutation} from '@tanstack/react-query'
import {useForm} from "react-hook-form"

const Apply = () => {

	const {register, handleSubmit} = useForm()

	const {data} = useQuery ({
		queryKey: ['authors'],
    queryFn: async () => {
      const response = await fetch('http://localhost:5000/api/author/check')
      const data = await response.json()
      return data
    }
	})

	const {mutate} = useMutation ({
		mutationKey: ['authors'],
    mutationFn: async (data, ) => {
      const response = await fetch(`http://localhost:5000/api/author/delete/${data}`, {
        method: 'DELETE'
      })
    }
	})

	const handleDelete = async (id) => {
    mutate(id, 'delete')
  }

	const handleNew = async (data) => {
		mutate(data, 'create')
	}

    return (
        <div>
					  <form onSubmit={handleSubmit(handleNew)}>
							<input type="text" {...register("firstName")} />
              <input type="text" {...register("lastName")} />
              <button type="submit">new</button>
            </form>
            {!data?.length ? <h1>no data</h1>:data.map(item => (
							<div key={item.id}>
                <p>{item.firstName}</p>
								<button onClick={() => deleted(item.id)}>delete</button>
              </div>
						))}
        </div>
    );
};

export default Apply;