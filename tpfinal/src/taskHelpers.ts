function parseDate(dateString: string): Date | null {
    if (!dateString) return null;
    const [day, month, year] = dateString.split('/');
    if (!day || !month || !year || isNaN(Number(day)) || isNaN(Number(month)) || isNaN(Number(year))) {
        return null;
    }

    const date = new Date(`${year}-${month}-${day}`);
    if (isNaN(date.getTime()) || day.length !== 2 || month.length !== 2 || year.length !== 4) {
        return null;
    }
    return date;
}

export { parseDate };