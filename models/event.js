const db = require('../util/database');

module.exports = class Event {
    constructor(name, abstract, date, start, end, vacancy, location_id, seminar_id, id) {
        this.id = id ? id : null;
        this.name = name;
        this.abstract = abstract;
        this.date = date;
        this.start = start;
        this.end = end;
        this.vacancy = vacancy;
        this.location_id = location_id;
        this.seminar_id = seminar_id;
    }

    async save() {
        if (this.id) {
            return db.query("UPDATE Event SET name = ?, abstract = ?, date = ?, start = ?, end = ?, location_id = ?, vacancy = ?, seminar_id = ? WHERE id = ?;",
                [this.name, this.abstract, this.date, this.start, this.end, this.location_id, this.vacancy, this.seminar_id, this.id]);
        }
        const ResultSetHeader = await db.query(
            "INSERT INTO Company (name, abstract, date, start, end, location_id, vacancy, seminar_id) VALUES (? ,? ,? ,? ,? ,? ,?, ?);",
            [this.name, this.abstract, this.date, this.start, this.end, this.location_id, this.vacancy, this.seminar_id]
        );
        this.id = ResultSetHeader[0].insertId;
    }

    static async getEventById(eventId) {
        try {
            const [rows] = await db.query(
                "SELECT * FROM Event WHERE id = ?",
                [eventId]
            );
            if (rows.length === 0)
                return null;
            const event = rows[0];
            return new Event(
                event.name,
                event.abstract,
                event.date,
                event.start,
                event.end,
                event.vacancy,
                event.location_id,
                event.seminar_id,
                event.id
            );
        } catch (err) {
            console.log(err);
        }
    }

    static async getEvents(pageNumber, pageSize) {
        //TODO: grouping by date
    }
}