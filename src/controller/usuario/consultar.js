import pool from '@database'

export default async (req, res) => {

    try {

        const { texto } = req.params

        const query = "CALL SUPER_CONSULTAR_USUARIOS(?)"

        const result = await pool.query(query, [texto])

        const data = {
            "OSUCCESS": result[0][0].length > 0 ? 1 : 0,
            "DATA": result[0][0]
        }

        return res.json(data)

    } catch (err) {

        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido consultar los usuarios",
            "err": err.message
        }

        return res.json(data)
    }

}